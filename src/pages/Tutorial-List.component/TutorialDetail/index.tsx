import React from "react";
import { Link } from "react-router-dom";
import TutorialDataService from "../../../services/tutorial.service";
import styled from "@emotion/styled";

const ContainerStyled = styled.div`
  margin-top: 20px;
`;
const TutorialDetail = ({ currentTutorial }: any) => {
  console.log(currentTutorial, "cts");
  const ButtonStyled = styled.button(
    ({ color }) =>
      `
      border: none;
    :focus {
      outline: none;
    }
    :hover{

      background-color: ${color};
    }

    `
  );

  const deleteTutorial = (id: any) => {
    TutorialDataService.delete(id)
      .then((response: any) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const updatePublished = () => {};

  return (
    <ContainerStyled className="col-md-6">
      {currentTutorial && (
        <div>
          <h4>Tutorial</h4>
          <div>
            <label>
              <strong>Title:</strong>
            </label>{" "}
            {currentTutorial.title}
          </div>

          <div>
            <label>
              <strong>Description:</strong>
            </label>{" "}
            {currentTutorial.description}
          </div>
          <div>
            <label>
              <strong>Status:</strong>
            </label>{" "}
            {currentTutorial.published ? "Published" : "Pending"}
          </div>
          <Link
            to={`/add/${currentTutorial.id}`}
            className="badge badge-warning"
          >
            Edit
          </Link>

          <ButtonStyled
            type="submit"
            className="badge badge-danger ml-2"
            onClick={() => deleteTutorial(currentTutorial.id)}
            color="#ff0019"
          >
            Delete
          </ButtonStyled>
          <ButtonStyled
            color="#0a5cb5"
            className="badge badge-primary ml-2"
            onClick={() => updatePublished}
          >
            Publish
          </ButtonStyled>
        </div>
      )}
    </ContainerStyled>
  );
};

export default TutorialDetail;
