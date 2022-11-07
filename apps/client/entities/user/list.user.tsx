
import {
  List,
  Datagrid,
  
NumberField,
DateField,
TextField,
BooleanField,
  ShowButton,
  EditButton, 
  DeleteButton,
  TextInput
} from "react-admin";
import Actions from "../../react-admin/components/Actions";

// ------------------------------------------------

const filters = [
  <TextInput label="Search" source="q" variant="outlined" />,
];

// ------------------------------------------------

export default function ListUser(props: any) {
return (
    <List {...props} filters={filters}>
    <Datagrid>
        <NumberField source="id" />
<TextField source="email" />
<TextField source="name" />
<NumberField source="age" />
<NumberField source="balance" />
<BooleanField source="active" />
<TextField source="permissions" />
<TextField source="gender" />
<DateField source="createdAt" />
<Actions>
        <ShowButton />
        <EditButton />
        <DeleteButton />
        </Actions>
    </Datagrid>
    </List>
  );
}