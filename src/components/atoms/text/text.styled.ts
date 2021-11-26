import styled from "styled-components";

interface textProps {
  theme: { string };
  variant: string;
}
const Text = styled.p`
  font-weight: ${({ theme, variant }: textProps) => {
    if (variant === "extraBold") {
      return theme.extraBold;
    }
    if (variant === "semiBold") {
      return theme.semiBold;
    }
    return theme.light;
  }};
  color: ${({ theme }) => theme.text};
`;

export default Text;
