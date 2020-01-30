import Layout from '../components/MyLayout';

export default function About() {
  return (
    <Layout>
      <p>This is the about page</p>
    </Layout>
  );
}

//Layout as a Higher Order Component:
//import withLayout from '../components/MyLayout';

// const Page = () => <p>This is the about page</p>;

// export default withLayout(Page);