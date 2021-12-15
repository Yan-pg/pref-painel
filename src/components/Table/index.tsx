import { useEffect, useState } from "react";
import { FiTrash, FiMoreHorizontal } from "react-icons/fi";
import { Tag } from "../Button/Tag";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import {
  Container,
  Header,
  Line,
  ContainerTitle,
  Pagination,
  ContentPagination,
  ButtonNextOuPrev,
} from "./styles";
import { useNavigate } from "react-router-dom";

interface ContentPostsProps {
  id: number;
  title: string;
  tag: string;
  adm: string;
  date: string;
}

interface ContentUsersProps {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
  avatar: string;
}

interface TableProps {
  titles: string[];
  contentPosts?: ContentPostsProps[];
  contentUsers?: ContentUsersProps[];
  page: number;
  onChangePageNext(): void;
  onChangePagePrev(): void;
}

export function Table({
  titles,
  contentPosts,
  contentUsers,
  page,
  onChangePageNext,
  onChangePagePrev,
}: TableProps) {
  const [contentPostsArray, setContentPostsArray] = useState<
    ContentPostsProps[]
  >([]);
  const [contentUsersArray, setContentUsersArray] = useState<
    ContentUsersProps[]
  >([]);

  const [selected, setselected] = useState(-1);

  useEffect(() => {
    if (contentPosts) {
      setContentPostsArray(contentPosts);
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

        {contentPostsArray.length > 0
          ? contentPostsArray.map((post, index) => (
              <>
                <Line key={`${post.id}-${index}-${Math.random()}`}>
                  <ContainerTitle>
                    <input
                      type="checkbox"
                      value={post.id}
                      onChange={(event) => setselected(+event.target.value)}
                    />
                    <img
                      src="https://avatars.githubusercontent.com/u/65233281?v=4"
                      alt="IMGAE"
                    />
                    <div>
                      <h3>{post.title}</h3>
                    </div>
                  </ContainerTitle>
                  <td>
                    <Tag name={post.tag} />
                  </td>

                  <td>
                    <p>{post.adm}</p>
                  </td>

                  <td>
                    <p>{post.date}</p>
                  </td>

                  <td>
                    <button>
                      {selected === post.id ? (
                        <FiTrash />
                      ) : (
                        <FiMoreHorizontal />
                      )}
                    </button>
                  </td>
                </Line>
              </>
            ))
          : contentUsersArray.map((user, index) => (
              <>
                <Line key={`${user.id}-${index}-${Math.random()}`}>
                  <ContainerTitle>
                    <input
                      type="checkbox"
                      value={user.id}
                      onChange={(event) => setselected(+event.target.value)}
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
                    <button>
                      {selected === user.id ? (
                        <FiTrash />
                      ) : (
                        <FiMoreHorizontal />
                      )}
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
