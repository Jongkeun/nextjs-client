import styled from "styled-components";
import AutocompleteInput from "./AutocompleteInput";

const Button = styled.button`
  button:hover {
    background: #0b7dda;
  }
`;
const Form = styled.form`
  * {
    box-sizing: border-box;
  }

  &.example input[type="text"] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 80%;
    background: #f1f1f1;
  }

  &.example ${Button} {
    background-color: #2196f3;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    border-top: 1px solid gray;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    float: left;
    font-size: 17px;
    padding: 10px;
    width: 20%;
  }

  &.example ${Button}:hover {
    background: #0b7dda;
  }
  &.example::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const SearchBar = () => {
  const actionCall = (event: any) => {
    // TODO: validation check of input and fetch API
    const data = new FormData(event.target);
    console.log(data.get("search"));
    const keys = data.values();
    console.log(keys.next());
    console.log(keys.next());
    console.log(keys.next());
    event.preventDefault();
  };
  return (
    <Form className="example" onSubmit={actionCall}>
      <input type="text" placeholder="Search.." name="search" />
      <AutocompleteInput name="search" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
