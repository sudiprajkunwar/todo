import React, { useEffect, useState } from "react";
import TutorialDataService from "../../services/tutorial.service";
import TutorialDetail from "./TutorialDetail";
import styled from "@emotion/styled";

const InputStyled = styled.div`
  margin-top: 20px;
`;
const ListStyled = styled.div`
  margin-top: 20px;
`;
const ContainerStyled = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const TutorialsList = () => {
  const [tutorials, setTutorials] = useState({
    tutorial: [] as any,
    currentTutorial: null,
    currentIndex: -1,
    searchTitles: "",
  });

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then((response) => {
        setTutorials({
          ...tutorials,
          tutorial: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const setActiveTutorial = (index: any, tutorial: any) => {
    setTutorials({
      ...tutorials,
      currentTutorial: tutorial,
      currentIndex: index,
    });
  };
  console.log(tutorials);

  const onChangeSearchTitle = (e: any) => {
    const searchTitle = e.target.value;

    setTutorials({
      ...tutorials,
      searchTitles: searchTitle,
    });

    TutorialDataService.findByTitle(tutorials.searchTitles)
      .then((response) => {
        // setTutorials({
        //   ...tutorials,
        //   tutorial: response.data,
        // });
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const searchTitle = () => {
    TutorialDataService.findByTitle(tutorials.searchTitles)
      .then((response) => {
        setTutorials({
          ...tutorials,
          tutorial: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const { tutorial, searchTitles, currentIndex } = tutorials;
  return (
    <ContainerStyled className="list row">
      <InputStyled className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitles}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={searchTitle}
            >
              Search
            </button>
          </div>
        </div>
      </InputStyled>
      <ListStyled className="col-md-6">
        <h4>Tutorials List</h4>

        <ul className="list-group">
          {tutorial &&
            tutorial.map((post: any, index: number) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTutorial(index, post)}
                key={index}
              >
                {post.title}
              </li>
            ))}
        </ul>
      </ListStyled>
      <TutorialDetail currentTutorial={tutorials.currentTutorial} />
    </ContainerStyled>
  );
};

export default TutorialsList;
