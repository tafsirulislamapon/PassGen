import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/reusable/Navbar.tsx";
import Form from "@/components/reusable/Form.tsx";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col bg-background p-4 sm:p-10 ">
        <Navbar />
        <Form />
      </div>
    </ThemeProvider>
  );
};

export default App;
