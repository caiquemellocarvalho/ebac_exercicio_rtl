import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";

import PostComments from ".."; 

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
      render(<PostComments/>);
      expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  it('Deve adicionar dois comentários', () => {
      render(<PostComments/>);

      
      fireEvent.change(screen.getByTestId('comment-textarea'), {
          target: {
              value: 'Comentário adicionado via testes',
          }
      });
      fireEvent.click(screen.getByTestId('comment-button'));
  
      
      fireEvent.change(screen.getByTestId('comment-textarea'), {
          target: {
              value: 'Segundo comentário adicionado via testes',
          }
      });
      fireEvent.click(screen.getByTestId('comment-button'));

      expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
  });
});