import PageLayout from 'components/PageLayout';
import ProductGrid from 'components/ProductGrid';
import { createApolloClient } from 'lib/apollo';
import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'lib/config';
import { GetStripeProducts } from 'lib/queries';
import type { InferGetStaticPropsType } from 'next';
import { Alert, Container, Heading, Spinner } from 'theme-ui';

const IndexPage = ({ products, error }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (error) {
    return (
      <PageLayout>
        <Alert>Error loading products</Alert>
        <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <Heading as="h1" sx={{ marginBottom: '2rem', fontSize: '3.2em' }}>
        Products
      </Heading>
      {products ? (
        <ProductGrid products={products} />
      ) : (
        <Container variant="layout.loading">
          <Spinner />
        </Container>
      )}
    </PageLayout>
  );
};

export async function getStaticProps() {
  const client = createApolloClient(takeshapeApiUrl, () => takeshapeAnonymousApiKey);

  let products = [];
  let error = null;

  try {
    const { data } = await client.query({
      query: GetStripeProducts
    });

    if (data.errors) {
      error = data.errors;
    } else {
      products = data.products.items;
    }
  } catch (err) {
    console.error(err);
    error = Array.isArray(err) ? err.map((e) => e.message).join() : err.message;
  }

  return { props: { products, error } };
}

export default IndexPage;