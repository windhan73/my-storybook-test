import { fn } from 'storybook/test';
import { Button } from './Button';

// 1. 객체를 변수(meta)에 할당합니다.
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export default meta;

// 2. 개별 스토리 정의
export const Primary = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

// 3. 디자인 탭이 활성화될 스토리
export const Newstory = {
  args: {
    primary: true,
    label: "Button",
  },
  parameters: {
    ...meta.parameters, // 기본 파라미터를 유지하면서
    design: {           // 디자인 설정을 추가합니다.
      type: "figma",
      url: "https://www.figma.com/design/LoXlhNuRXFWpWC368xEZbl/Test_01?node-id=68-2&t=ADxb2yBC5HQSiAj9-1",
    },
  },
};