import { Navbar } from "./components/navbar/Navbar";


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
<>
<Navbar/>
<div>
    {children}
</div>
</>
    );
  }