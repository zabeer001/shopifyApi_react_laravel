
import { Page, LegacyCard, DataTable, Link } from '@shopify/polaris';

function ProductPage() {
  const rows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  return (
    <Page title="Sales by product">
      <LegacyCard>
        {/* Add Link to Create Product Page */}
        <Link url="/create-product">Create Product</Link>

        <DataTable
          columnContentTypes={['text', 'numeric', 'numeric', 'numeric', 'numeric']}
          headings={['Product', 'Price', 'SKU Number', 'Net quantity', 'Net sales']}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
        />
      </LegacyCard>
    </Page>
  );
}

export default ProductPage;
