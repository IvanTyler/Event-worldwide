import React, { useState, useRef } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsByParams, setAllByParams } from '../../redux/actions/eventAC';

function SearchForm() {
  const [componentSize, setComponentSize] = useState('large');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const dispatch = useDispatch()

  const selectCategory = useRef(null)
console.log(selectCategory);

  const findEvent = (value) => {
    dispatch(setAllByParams(value))
}

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(123);
    const category = selectCategory.current.value
    // const date = selectDate.current.value
    console.log(category.current.value);
    // console.log(date);


    // // findEvent(inputUser)
    // dispatch(getEventsByParams(inputCity, inputCountry, inputKeyword, category, date))
    // setInputCity('')
    // setInputCountry('')
    // setInputKeyword('')

  }
  const onFinish = (values) => {
    // event.preventDefault()
    console.log('Received values of form: ', values);
  };


  return (
    <>
      <Form
      // onFormFinish={submitHandler}
      onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >

        <Form.Item label="Страна" name='страна'>
          <Input />
        </Form.Item>
        <Form.Item label="Город" name='город'>
          <Input />
        </Form.Item>
        <Form.Item label="Укажите ключевое слово" name='укажите ключевое слово'>
          <Input />
        </Form.Item>
        <Form.Item label="Категория">
          <Select ref={selectCategory} label="Категория" name='категория'>
            <Select.Option value="sport">Спорт</Select.Option>
            <Select.Option value="music">Музыка</Select.Option>
            <Select.Option value="art">Исскуство и театр</Select.Option>
            <Select.Option value="other">Разное</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Дата" name='дата'>
          <DatePicker />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Найти</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SearchForm;
