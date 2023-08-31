import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";

describe("testes para o componente PostComments", () => {
  test("deve renderizar o componente corretamente", () => {
    render(<Post />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("deve adicionar os comentários", () => {
    render(<Post />);
    fireEvent.change(screen.getByTestId("post-comment-input"), {
      target: { value: "primeiro comentário" },
    });
    fireEvent.click(screen.getByTestId("btn-post-comment"));

    fireEvent.change(screen.getByTestId("post-comment-input"), {
      target: { value: "segundo comentário" },
    });
    fireEvent.click(screen.getByTestId("btn-post-comment"));
    expect(screen.getAllByTestId("list-comment")).toHaveLength(2);
  });
});
