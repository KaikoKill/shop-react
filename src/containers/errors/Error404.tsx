import Layout from '@/hocs/layouts/layouts';
import Nav from "@/components/navigations/Nav";
import Footer from "@/components/navigations/Footer";

export default function Error404() {
  return (
    <Layout >
        <Nav/>
        <h1>Error 404</h1>
        <Footer/>
    </Layout  >
    )
}