import React from "react";
import { RepositoryListContainer } from "../../components/RepositoryList";
import { render, within } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect"; //typing otherwise not working so have to import
import { RepositoryDataFromApi } from "../../types";
import { NativeRouter } from "react-router-native";
describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      } as RepositoryDataFromApi; // some weird thing with optional types that after long googling seems to be broken on yup's end. https://github.com/jquense/yup/issues/916
      const selected = "latest";
      const setSelected = jest.fn();
      const searchWord = "";
      const setSearchWord = jest.fn();
      const { getAllByTestId } = render(
        <NativeRouter>
          <RepositoryListContainer
            state={{ searchWord, setSearchWord, selected, setSelected }}
            onEndReach={() => console.log("end")}
            repositories={repositories}
          />
        </NativeRouter>
      );
      const repoItems = getAllByTestId("repositoryItem");
      const [firstItem, secondItem] = repoItems;
      const [firstData, secondData] = repositories.edges.map(
        (edge) => edge.node
      );

      expect(firstItem).toHaveTextContent(firstData.fullName);
      expect(firstItem).toHaveTextContent(firstData.language);
      //overcomplex solution but just testing
      expect(
        within(firstItem).getByText("Rating").parent?.parent
      ).toHaveTextContent(firstData.ratingAverage.toString());
      expect(
        within(firstItem).getByText("Forks").parent?.parent
      ).toHaveTextContent(firstData.forksCount.toString());
      expect(
        within(firstItem).getByText("Stars").parent?.parent
      ).toHaveTextContent(firstData.stargazersCount.toString());
      expect(
        within(firstItem).getByText("Reviews").parent?.parent
      ).toHaveTextContent(firstData.reviewCount.toString());

      expect(secondItem).toHaveTextContent(secondData.fullName);
      expect(secondItem).toHaveTextContent(secondData.language);
      //overcomplex solution but just testing
      expect(
        within(secondItem).getByText("Rating").parent?.parent
      ).toHaveTextContent(secondData.ratingAverage.toString());
      expect(
        within(secondItem).getByText("Forks").parent?.parent
      ).toHaveTextContent(secondData.forksCount.toString());
      expect(
        within(secondItem).getByText("Stars").parent?.parent
      ).toHaveTextContent(secondData.stargazersCount.toString());
      expect(
        within(secondItem).getByText("Reviews").parent?.parent
      ).toHaveTextContent(secondData.reviewCount.toString());
      // Add your test code here
    });
  });
});
