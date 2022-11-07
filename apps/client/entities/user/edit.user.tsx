
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
NumberInput,
BooleanInput,
AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditUser(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="email" variant="outlined" validate={required()}  />
<TextInput source="name" variant="outlined" validate={required()}  />
<NumberInput source="age" variant="outlined" validate={required()} />
<NumberInput source="balance" variant="outlined"  />
<BooleanInput source="active" variant="outlined"  />
<TextInput source="permissions" variant="outlined"   />
<AutocompleteInput variant="outlined" source="gender" choices={[
{ id: "Male", name: "Male" },
{ id: "Female", name: "Female" },
]}  />

      </SimpleForm>
    </Edit>
  );
}