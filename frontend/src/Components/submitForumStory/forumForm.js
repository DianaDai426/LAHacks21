import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './forumForm.css';
import { Form, Input, Button, Select } from 'antd';


const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};





class SubmitForm extends React.Component {
  formRef = React.createRef();
  
  onFinish = (values) => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };




  
  

  render() {
    return (
      <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
        
        
        {/* email */}
        <Form.Item
          name="note"
          label="Email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input/>
          
        </Form.Item>

        {/* name */}
        <Form.Item
          name="Name"
          label="Name"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your Name!'
            },
          ]}
        >
          <Input />
        </Form.Item>

        



          {/* city or state */}
        <Form.Item
          name="state"
          label="State/City"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select your state"
            allowClear
          >
            <Option value="Alabama">Alabama</Option>
            <Option value="Alaska">Alaska</Option>














            
            <Option value="other">other</Option>
          </Select>














        </Form.Item>

        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.state !== currentValues.state}
        >
          {({ getFieldValue }) =>
            getFieldValue('state') === 'other' ? (
              <Form.Item
                name="customizeState"
                label="Your country"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>

          {/* stories */}
          {/* name */}
          <Form.Item
              name="Story"
              label="Story"
              
              rules={[
                {
                  required: true,
                  message: 'Please share your story!'
                },
              ]}
            >
          <Input.TextArea />
          </Form.Item>








          {/* button */}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
          
        </Form.Item>
      </Form>
    );
  }
}

export default SubmitForm;