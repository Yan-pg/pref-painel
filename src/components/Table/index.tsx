import { useEffect, useState } from "react";
import { FiTrash, FiMoreHorizontal } from "react-icons/fi";
import { Tag } from "../Button/Tag";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { Post } from "../../interfaces";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Header,
  Line,
  ContainerTitle,
  Pagination,
  ContentPagination,
  ButtonNextOuPrev,
} from "./styles";

interface ContentUsersProps {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
  avatar: string;
}

interface TableProps {
  titles: string[];
  contentPosts?: Post[];
  contentUsers?: ContentUsersProps[];
  page: number;
  onChangePageNext(): void;
  onChangePagePrev(): void;
  handleDelete?(id?: string): void;
}

export function Table({
  titles,
  contentPosts,
  contentUsers,
  page,
  onChangePageNext,
  onChangePagePrev,
  handleDelete,
}: TableProps) {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);
  const [contentUsersArray, setContentUsersArray] = useState<
    ContentUsersProps[]
  >([]);

  const [selected, setselected] = useState(-1);

  useEffect(() => {
    if (contentPosts) {
      setPosts(contentPosts);
    } else if (contentUsers) {
      setContentUsersArray(contentUsers);
    }
  }, [contentPosts, contentUsers]);

  function getDate(date: string): string {
    const value = date.replace("T", " ").split("-");
    const time = value[2].substring(3, 8).replace(":", "h");

    const [hour, minutes] = time.split("h");

    const timeWithTimezone = `${+hour + -3}h${minutes}`;

    return `${value[2].substring(0, 2)}/${value[1]}/${
      value[0]
    } às ${timeWithTimezone}`;
  }

  return (
    <>
      <Container>
        <Header>
          {titles.map((title, index) => (
            <th key={`${title}-${index}-${Math.random()}`}>{title}</th>
          ))}
          <div></div>
        </Header>

        {posts.length > 0
          ? posts.map((post, index) => (
              <>
                <Line key={`${post.id}-${index}-${Math.random()}`}>
                  <ContainerTitle>
                    <input
                      type="checkbox"
                      value={index}
                      onChange={(event) =>
                        setselected((oldValue) =>
                          oldValue === +event.target.value
                            ? -1
                            : +event.target.value
                        )
                      }
                      checked={index === selected}
                    />
                    <button onClick={() => navigate(`/post/${post.id}`)}>
                      <img
                        src={`https://images-pref.s3.amazonaws.com/${post.image}`}
                        alt="IMGAE"
                      />
                      <div>
                        <h3>{post.title}</h3>
                      </div>
                    </button>
                  </ContainerTitle>
                  <td>
                    <Tag name={post.categories[0].title} />
                  </td>

                  <td>
                    <p style={{ marginLeft: 25 }}>{post.user[0].name}</p>
                  </td>

                  <td>
                    <p style={{ marginLeft: 25 }}>{getDate(post.created_at)}</p>
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        selected === index &&
                        handleDelete &&
                        handleDelete(post.id)
                      }
                    >
                      {selected === index ? <FiTrash /> : <FiMoreHorizontal />}
                    </button>
                  </td>
                </Line>
              </>
            ))
          : contentUsersArray.map((user, index) => (
              <>
                <Line key={`${user.id}-${index}-${Math.random()}`}>
                  <ContainerTitle onClick={() => navigate(`/user/${user.id}`)}>
                    <input
                      type="checkbox"
                      value={index}
                      onChange={(event) =>
                        setselected((oldValue) =>
                          oldValue === +event.target.value
                            ? -1
                            : +event.target.value
                        )
                      }
                      checked={index === selected}
                    />
                    <img
                      src={
                        user.avatar
                          ? `https://images-pref.s3.amazonaws.com/${user.avatar}`
                          : "https://avatars.githubusercontent.com/u/65233281?v=4"
                      }
                      alt="IMGAE"
                    />
                    <div>
                      <h3>{user.name}</h3>
                      <p>{user.email}</p>
                    </div>
                  </ContainerTitle>

                  <td>
                    <p>Administrador</p>
                  </td>

                  <td>
                    <p>{getDate(user.created_at)}</p>
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        selected === index &&
                        handleDelete &&
                        handleDelete(user.id)
                      }
                    >
                      {selected === index ? <FiTrash /> : <FiMoreHorizontal />}
                    </button>
                  </td>
                </Line>
              </>
            ))}
      </Container>

      <Pagination>
        <ContentPagination>
          {page > 1 && (
            <ButtonNextOuPrev
              style={{ marginRight: 20 }}
              onClick={onChangePagePrev}
            >
              <FaChevronLeft />
            </ButtonNextOuPrev>
          )}

          <ButtonNextOuPrev onClick={onChangePageNext}>
            <FaChevronRight />
          </ButtonNextOuPrev>
        </ContentPagination>
      </Pagination>
    </>
  );
}
