import Link from 'next/link';
import { Typography, Badge } from 'antd';
import { CalculatorTwoTone, NotificationOutlined } from '@ant-design/icons';

export default function AboutXIRR({ id }) {
  return (
    <div id={id} className="text-gray-500">
      <h2 className="uppercase font-bold text-xl text-gray-700 mb-4 leading-4">
        NEW: ONLINE XIRR CALCULATOR
      </h2>

      <Typography.Text>
        Use our
        {' '}
        <Badge dot status='processing'>
          <Link href="/xirr-calculator" passHref legacyBehavior>
            <Typography.Link>
              <CalculatorTwoTone style={{ marginRight: 4 }} />
              Online XIRR Calculator
            </Typography.Link>
          </Link>
        </Badge>
        {' '}
        to calculate XIRR by entering cashflow amounts and corresponding dates.
      </Typography.Text>
    </div>
  );
}
