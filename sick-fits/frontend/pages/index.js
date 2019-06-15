import Link from "next/link";

import styled from "styled-components";

const Mybutton = styled.button`
  background: red;
`;

const Home = props => {
  return (
    <div className="wrapper">
      <button>
        <Link href="/sell">GO TO -> </Link>
      </button>

      <Mybutton>Click Me</Mybutton>
    </div>
  );
};

export default Home;
