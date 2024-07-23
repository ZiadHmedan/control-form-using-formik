import CheckBox from "./CheckBox";
import Input from "./Input";
import Radio from "./Radio";
interface MyComponentProps {
  control: string;
  type: string;
  name: string;
  label: string;
  options?: { key: string; val: string }[];

}
const FiledControl: React.FC<MyComponentProps> = ({ control,...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "radio": return <Radio {...rest}/>
    case "checkbox": return<CheckBox {...rest}/>;
    default:
      return null;
  }
};

export default FiledControl;
