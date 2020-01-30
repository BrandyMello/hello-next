import Layout from '../components/MyLayout';

export default function Index() {
  return (
      <Layout>
        <p>Hello Next.js</p>
      </Layout>
  );
}

//Layout as a Higher Order Component:
// import withLayout from '../components/MyLayout';

// const Page = () => <p>Hello Next.js</p>;

// export default withLayout(Page);