import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage, type AuthProvider } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';


const providers = [{ id: 'credentials', name: 'Registered Account' }];
// preview-start
const BRANDING = {
  logo: (
    <img
      src="https://img.icons8.com/?size=100&id=ciHkwAJFgWOk&format=png&color=000000"
      alt="To-do logo"
      style={{ height: 40 }}
    />
  ),
  title: 'To-do App',
};
// preview-end

const signIn: (provider: AuthProvider) => void = async (provider) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function LoginPage() {
  const theme = useTheme();
  return (
    // preview-start
    
    <AppProvider branding={BRANDING} theme={theme}>
      <Box
    sx={{
      
    '& .MuiCard-root': {
      width: '700px',
    },

    '& .MuiBox-root.css-0': {
      width: '340px',
      minHeight: '200px',
      
    }
  }}

>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false }, form: { noValidate: true } }}
/>

<div style={{ textAlign: 'center', marginTop: '-239px' ,color:''}}>
      Don't have an account?{" "}
      <a href="/signup" style={{textDecoration:'none'}}>Create Account</a>
    </div>
</Box>

    </AppProvider>
    // preview-end
  );
}
