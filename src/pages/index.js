import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import {
  Card,
  Heading,
  Text,
  Spinner,
  Pane,
  Avatar,
  SearchInput,
  Button,
  toaster,
  Paragraph,
} from "evergreen-ui";
import { PROXY_URL, API_URL } from "../functions/fetchApi";
import axios from "axios";
import SEO from "../components/seo";

const IndexPage = () => {
  const [data, setData] = useState();
  const [busy, setBusy] = useState(true);

  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredientQuery, setIngredientQuery] = useState("");

  const [recipeInput, setRecipeInput] = useState("");
  // const [recipeQuery, setRecipeQuery] = useState();

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (ingredientQuery.length > 0 || recipeInput.length > 0) {
      axios(
        PROXY_URL + API_URL + `?i=${ingredientQuery}&q=${recipeInput}&p=${page}`
      )
        .then(result => {
          setBusy(false);
          setData(result.data.results);
        })
        .catch(error => {
          setBusy(false);
          toaster.danger("Error connecting to the dreamland");
        });
      return;
    }
    axios(PROXY_URL + API_URL + `?p=${page}`)
      .then(result => {
        setBusy(false);
        setData(result.data.results);
      })
      .catch(error => {
        setBusy(false);
        toaster.danger("Error connecting to the dreamland");
      });
    return;
  }, [page, ingredientQuery, recipeInput]);

  function searchByIngredients() {
    let ingredients = "";
    if (typeof ingredientInput === "object") {
      ingredientInput.forEach((input, index) => {
        index === ingredientInput.length - 1
          ? (ingredients += input)
          : input === ""
          ? (ingredients += input)
          : (ingredients += input + ",");
      });
    } else {
      return setIngredientQuery(ingredientInput);
    }
    setIngredientQuery(ingredients);
    searchProcess(ingredients);
  }

  function searchProcess(ingredients) {
    setBusy(true);
    setData(null);
    axios(PROXY_URL + API_URL + `?i=${ingredients}&q=${recipeInput}&p=${page}`)
      .then(result => {
        // console.log(result.data.results);
        setBusy(false);
        if (result.data.results.length === 0) {
          return toaster.warning("Not Found :)");
        }
        setData(result.data.results);
      })
      .catch(error => {
        toaster.danger("Cannot Connect to Dreamland");
      });
  }

  return (
    <Layout>
      <SEO title={`Home | Page ${page}`} />
      <Pane>
        <Heading size={700}>Hello</Heading>
        <Text>Find fun recipes here</Text>
        <Pane marginY={20}>
          <Heading size={500}>Search Here</Heading>
          <Pane marginY={5}>
            <Text>
              You can put multi-ingredients here, just separate using comma.
            </Text>
            <SearchInput
              onBlur={event => {
                setIngredientInput(event.target.value.split(/[., -]/));
              }}
              width="100%"
              height={50}
              placeholder="ingredients..."
            />
          </Pane>
          <Pane>
            <Text>Put recipe title here (one keyword only)</Text>
            <SearchInput
              onBlur={event => {
                setRecipeInput(event.target.value);
              }}
              width="100%"
              height={50}
              placeholder="recipe title..."
            />
          </Pane>
          <Button
            marginTop={10}
            width="100%"
            appearance="primary"
            intent="success"
            height={50}
            onClick={() => searchByIngredients()}
          >
            Let's Go
          </Button>
        </Pane>
        {busy ? (
          <Pane>
            <Paragraph textAlign="center">Please Wait...</Paragraph>
            <Spinner marginX="auto" marginY={120} />
          </Pane>
        ) : data ? (
          data.map((recipe, index) => (
            <Card
              key={index}
              borderRadius={18}
              elevation={3}
              marginY={10}
              padding={20}
              display={"flex"}
            >
              <Avatar size={100} src={`https://adsfencodo.cloudimg.io/v7/${recipe.thumbnail}`} />
              <Pane marginX={20} display="block">
                <a href={recipe.href} target="_blank" rel="noopener noreferrer">
                  <Heading>{recipe.title}</Heading>
                </a>
                <Text>Ingredients : {recipe.ingredients}</Text>
              </Pane>
            </Card>
          ))
        ) : (
          <Paragraph>Can't Found Anything</Paragraph>
        )}
        <Pane alignItems="center" justifyContent="center">
          <Heading textAlign="center" marginY={20}>
            Page : {page}
          </Heading>
          <Button
            appearance="primary"
            intent="warning"
            iconBefore="arrow-left"
            height={50}
            onClick={() => {
              setBusy(true);
              setData(null);
              page === 1 ? setPage(1) : setPage(page - 1);
            }}
          >
            Prev Page
          </Button>
          <Button
            appearance="primary"
            intent="warning"
            iconAfter="arrow-right"
            height={50}
            float="right"
            onClick={() => {
              setBusy(true);
              setData(null);
              setPage(page + 1);
            }}
          >
            Next Page
          </Button>
        </Pane>
      </Pane>
    </Layout>
  );
};

export default IndexPage;
