// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignUpButton,
// } from "@clerk/clerk-react";
// import { Navigate } from "react-router-dom";

// export const Auth = () => {
//   return (
//     <div className="sign-in-container">
//       <SignedOut>
//         <h1> Welcome to Your Own Personal Finance Tracker!</h1>
//         <SignUpButton mode="modal" />
//         <SignInButton mode="modal" />
//       </SignedOut>
//       <SignedIn>
//         <Navigate to="/main" />
//       </SignedIn>
//     </div>
//   );
// };


// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignUpButton,
// } from "@clerk/clerk-react";
// import { Navigate, useNavigate } from "react-router-dom";
// import styled from "styled-components";

// // Styled components
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(to right, #f8f9fa, #e9ecef);
// `;

// const Content = styled.div`
//   text-align: center;
//   background-color: #fff;
//   padding: 40px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 10px;
//   color: #333;
// `;

// const Description = styled.p`
//   font-size: 1rem;
//   margin-bottom: 30px;
//   color: #555;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 15px;
// `;

// const Button = styled.button<{ primary?: boolean }>`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s, transform 0.2s;
//   color: #fff;
//   background-color: ${({ primary }) => (primary ? "#007bff" : "#6c757d")};
//   &:hover {
//     background-color: ${({ primary }) => (primary ? "#0056b3" : "#5a6268")};
//     transform: translateY(-2px);
//   }
// `;

// export const Auth = () => {
 
//   return (
//     <Container>
//       <SignedOut>
//         <Content>
//           <Title>Welcome to Your Personal Finance Tracker!</Title>
//           <Description>
//             Manage your finances with ease and efficiency.
//           </Description>
//           <ButtonContainer>
//             <SignUpButton mode="modal">
//               <Button primary>Sign Up</Button>
//             </SignUpButton>
//             <SignInButton mode="modal">
//               <Button>Sign In</Button>
//             </SignInButton>
//           </ButtonContainer>
//         </Content>
//       </SignedOut>
//       <SignedIn>
//         <Navigate to="/main" />
//       </SignedIn>
//     </Container>
//   );
// };


// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignUpButton,
// } from "@clerk/clerk-react";
// import { Navigate } from "react-router-dom";
// import styled from "styled-components";

// // Styled components
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(to right, #f8f9fa, #e9ecef);
// `;

// const Content = styled.div`
//   text-align: center;
//   background-color: #fff;
//   padding: 40px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 10px;
//   color: #333;
// `;

// const Description = styled.p`
//   font-size: 1rem;
//   margin-bottom: 30px;
//   color: #555;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 15px;
// `;

// const Button = styled.button<{ primary?: boolean }>`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s, transform 0.2s;
//   color: #fff;
//   background-color: ${({ primary }) => (primary ? "#007bff" : "#6c757d")};
//   &:hover {
//     background-color: ${({ primary }) => (primary ? "#0056b3" : "#5a6268")};
//     transform: translateY(-2px);
//   }
// `;

// export const Auth = () => {
//   return (
//     <Container>
//       <SignedOut>
//         <Content>
//           <Title>Welcome to Your Personal Finance Tracker!</Title>
//           <Description>
//             Manage your finances with ease and efficiency.
//           </Description>
//           <ButtonContainer>
//             <SignUpButton mode="modal">
//               <Button primary>Sign Up</Button>
//             </SignUpButton>
//             <SignInButton mode="modal">
//               <Button>Sign In</Button>
//             </SignInButton>
//           </ButtonContainer>
//         </Content>
//       </SignedOut>
//       <SignedIn>
//         <Navigate to="/main"  />
//       </SignedIn>
//     </Container>
//   );
// };



import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: #eaeaea;
  width:100%
`;

const Content = styled.div`
  text-align: center;
  background-color: #ffffff;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px; /* Adjust if needed for larger screens */
`;

const Title = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 20px;
  color: #222;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 30px;
  color: #666;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.2s;
  color: #fff;
  background-color: ${({ primary }) => (primary ? "#007bff" : "#6c757d")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ primary }) => (primary ? "#0056b3" : "#5a6268")};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: ${({ primary }) => (primary ? "#004080" : "#4e5a62")};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const Auth = () => {
  return (
    <Container>
      <SignedOut>
        <Content>
          <Title>Welcome to Your Personal Finance Tracker</Title>
          <Description>
            Efficiently manage your finances and make informed decisions with
            ease. Please sign up or log in to continue.
          </Description>
          <ButtonContainer>
            <SignUpButton mode="modal">
              <Button primary>Sign Up</Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          </ButtonContainer>
        </Content>
      </SignedOut>
      <SignedIn>
        <Navigate to="/main" />
      </SignedIn>
    </Container>
  );
};
