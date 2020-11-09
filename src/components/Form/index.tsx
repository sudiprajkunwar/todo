import React, { useEffect } from "react";
import styled from "@emotion/styled";
import TutorialDataService from "../../services/tutorial.service";
import { useParams } from "react-router-dom";
import useForm from "./../useForm/index";
import validate from "./validation";

const StyledForm = styled.form`
  margin: 0 auto;
  width: 50%;
  padding: 20px;
`;
const Form = () => {
  // const [values, setValues] = useState({
  //   // id: null,
  //   title: "",
  //   description: "",
  //   // published: false,
  //   submitted: false,
  // });
  const {
    handleInputChange,
    handleSubmit,
    values,
    setValues,
    errors,
  } = useForm(submit, validate);

  let { id }: any = useParams();

  const getTutorial = (id: number) => {
    id &&
      TutorialDataService.get(id)
        .then((response) => {
          setValues(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
  };

  useEffect(() => {
    getTutorial(id);
  }, [id]);

  // const handleInputChange = (e: any) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };
  function submit() {
    TutorialDataService.create(values)
      .then((res) => {
        setValues({ ...res.data, submitted: true });
        // console.log(res.data, "post data");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const updateTutorial = (id: any, e: any) => {
    e.preventDefault();
    TutorialDataService.update(id, values)
      .then((res) => {
        // console.log(res.data);
        setValues({ ...res.data, submitted: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    // setValues({
    //   ...values,
    // });
  };

  const { title, description, submitted } = values;
  return (
    <StyledForm className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              name="title"
              value={title}
              onChange={handleInputChange}
            />
          </div>
          {errors.title && <p className="ermsg">{errors.title}</p>}

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              name="description"
              value={description}
              onChange={handleInputChange}
            />
          </div>
          {errors.description && <p className="ermsg">{errors.description}</p>}

          {id ? (
            <button
              onClick={(e) => updateTutorial(id, e)}
              className="btn btn-success"
            >
              Edit
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-success"
            >
              Submit
            </button>
          )}
        </div>
      )}
    </StyledForm>
  );
};

export default Form;
