import Link from 'next/link';
import {
  Button, Flex, Space, Typography, Divider,
} from 'antd';
import { CalculatorTwoTone, StockOutlined } from '@ant-design/icons';

export default function HeaderNew() {
  return (
    <header>
      <Flex justify="center" align="center" vertical>

        <Typography.Title level={1} style={{ margin: 0 }}>XIRR calculators</Typography.Title>
        <Typography.Text>Check your portfolio's annualised rate of return</Typography.Text>

        <Flex style={{ marginTop: 16 }} justify="center" align="center" wrap="wrap" gap={24}>
          <Link href="/xirr-calculator" passHref legacyBehavior>
            <Typography.Link>
              <CalculatorTwoTone style={{ marginRight: 4 }} />
              Online Calculator
            </Typography.Link>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <Typography.Link>
              <StockOutlined style={{ marginRight: 4 }} />
              Zerodha XIRR Calculator
            </Typography.Link>
          </Link>
        </Flex>
      </Flex>
    </header>
  );
}
