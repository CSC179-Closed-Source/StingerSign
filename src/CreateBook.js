import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';


const CREATE_LINK_MUTATION = gql`
  mutation createBook(
    $Email: String!
    $FirstName: String!
    $LastName: String!
    $MiddleInitial: String!
    $Password: String!
  ) {
    post(Email: $Email, FirstName: $FirstName, LastName: $LastName, MiddleInitial: $MiddleInitial, Password: $Password) {
      id
      createdAt
      Password
      MiddleInitial
      LastName
      FirstName
      Email
    }
  }
`;

const CreateBook = () => {
  const [formState, setFormState] = useState({
    Email: '',
    FirstName: '',
    LastName: '',
    MiddleInitial: '',
    Password: ''
  });

const [createBook] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      Email: formState.Email,
      FirstName: formState.FirstName,
      LastName: formState.LastName,
      MiddleInitial: formState.MiddleInitial,
      Password: formState.Password
    }
  });


  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createBook();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                Email: e.target.value
              })
            }
            type="text"
            placeholder="Email Address"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                FirstName: e.target.value
              })
            }
            type="text"
            placeholder="First Name"
          />
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                MiddleInitial: e.target.value
              })
            }
            type="text"
            placeholder="Middle Initial"
          />
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                LastName: e.target.value
              })
            }
            type="text"
            placeholder="Last Name"
          />
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                Password: e.target.value
              })
            }
            type="text"
            placeholder="Password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBook;