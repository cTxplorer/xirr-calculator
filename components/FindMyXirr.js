import React, { useState } from 'react';
import { xirr, convertRate } from 'node-irr';
import {
  Button, Form, InputNumber, Space, DatePicker, Typography, Statistic, Flex, Card,
} from 'antd';
import {
  DeleteOutlined, PlusOutlined, ArrowUpOutlined, ArrowDownOutlined,
} from '@ant-design/icons';

const FindMyXirr = () => {
  const [xirrResult, setXirrResult] = useState(null);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    let cashflows = values.cashflows.filter((val) => val.amount && val.date);
    cashflows = cashflows.map((val) => ({
      amount: val.amount * (!val.sign || val.sign === '+' ? 1 : -1),
      date: new Date(val.date).toISOString().split('T')[0],
    }));
    const result = xirr(cashflows);
    setTimeout(() => setXirrResult(100 * convertRate(result.rate, 'year')), 300);
  };
  return (
    <Card title="Find my XIRR" style={{ width: 'min(100%, 500px)', maxWidth: '100vw', margin: '0 auto' }}>
      <Flex vertical justify="center" align="flex-start" gap={8}>
        <div>
          <Typography.Title level={4}>Enter your cashflows</Typography.Title>
          <Typography.Text mark>Use minus (-) sign for inflow amount (investment)</Typography.Text>
        </div>
        <Form
          name="xirr-calculator"
          onFinish={onFinish}
          form={form}
          style={{ width: '100%' }}
        >
          <Form.List
            name="cashflows"
            initialValue={[{}, {}]}
            validateTrigger={['onSubmit']}
            rules={[
              {
                validator: async (_, cashflows) => {
                  if (!cashflows || cashflows.length < 2) {
                    return Promise.reject(new Error('At least 2 transactions are required to calculate returns'));
                  }
                  const cfSigns = new Set(cashflows.map((cf) => (cf.amount < 0 ? '-' : '+')));
                  if (!cfSigns.has('-')) {
                    return Promise.reject(new Error('There must be at least one inflow entry. Amounts with minus (-) sign denote inflow/investment'));
                  }
                  if (!(cfSigns.has('+') || cfSigns.has(undefined))) {
                    return Promise.reject(new Error('There must be at least one outflow entry. Amount with plus (+) or no sign denote outflow/sell/current value'));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <Flex vertical gap="small">
                <Flex vertical gap="small" style={{ alignSelf: 'center', width: '100%' }}>
                  {fields.map((field, index) => (
                    <Space key={field.key} style={{ flex: 1 }} className="space-cashflow">
                      {/* <Typography.Text className="hidden md:block" style={{ fontVariantNumeric: 'tabular-nums' }}>{`#${ index }`}</Typography.Text> */}
                      <Form.Item
                        noStyle
                        name={[field.name, 'amount']}
                        validateTrigger={['onBlur', 'onChange']}
                        rules={[{
                          validator: async (_, value) => {
                            const formValues = form.getFieldsValue();
                            const currentCashflowValue = formValues.cashflows[field.name];
                            if (currentCashflowValue?.date && !value) {
                              return Promise.reject(new Error(`Cashflow amount missing!`));
                            }
                            return Promise.resolve();
                          },
                        }]}
                        style={{ width: '100%', flex: 1 }}
                      >
                        <InputNumber
                          // addonBefore={(
                          //   <Form.Item
                          //     noStyle
                          //     name={[field.name, 'sign']}
                          //     validateTrigger={['onBlur', 'onChange']}
                          //   >
                          //     <Select defaultValue="+">
                          //       <Select.Option value="-">-</Select.Option>
                          //       <Select.Option value="+">+</Select.Option>
                          //     </Select>
                          //   </Form.Item>
                          // )}
                          placeholder="Amount"
                          style={{ width: '100%', flex: 1 }}
                        />
                      </Form.Item>
                      <Form.Item
                        noStyle
                        name={[field.name, 'date']}
                        validateTrigger={['onBlur', 'onChange']}
                        rules={[{
                          validator: async (_, value) => {
                            const formValues = form.getFieldsValue();
                            const currentCashflowValue = formValues.cashflows[field.name];
                            if (currentCashflowValue?.amount && !value) {
                              return Promise.reject(new Error(`Cashflow date missing!!`));
                            }
                            return Promise.resolve();
                          },
                        }]}
                        style={{ width: '100%', flex: 1, flexGrow: 1.5 }}
                      >
                        <DatePicker
                          placeholder="Date"
                          style={{ width: '100%', flex: 1 }}
                        />
                      </Form.Item>
                      {fields.length > 2 ? (
                        <Button
                          type="ghost"
                          size="small"
                          icon={<DeleteOutlined onClick={() => remove(field.name)} />}
                        />
                      ) : null}
                    </Space>
                  ))}
                  <Button
                    type="dashed"
                    onClick={add}
                    icon={<PlusOutlined />}
                  >
                    Add entry
                  </Button>
                </Flex>

                <Form.Item style={{ margin: '4px 8px', width: 0, minWidth: 'fit-content', textWrap: 'balance' }}>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </Flex>
            )}
          </Form.List>

          <Form.Item noStyle>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Calculate
            </Button>
          </Form.Item>

          {
            xirrResult !== null ? (
              <Statistic
                title="XIRR (p.a.)"
                value={xirrResult}
                precision={2}
                valueStyle={{ color: xirrResult >= 0 ? '#3f8600' : '#cf1322' }}
                prefix={xirrResult >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                suffix="%"
                style={{ marginTop: 16, display: 'flex', alignItems: 'flex-end' }}
              />
            ) : ''
          }
        </Form>
      </Flex>
    </Card>
  );
}

export default FindMyXirr;
