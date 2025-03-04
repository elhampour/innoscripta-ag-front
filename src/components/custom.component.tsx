import { Container, Typography } from "@mui/material";

const CustomComponent = ({ children, title }) => {
  return (
    <Container>
      <Typography variant="h4" textAlign="center" marginY={4}>
        {title}
      </Typography>
      {children}
    </Container>
  );
};

export default CustomComponent;
