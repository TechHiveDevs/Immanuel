
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
BooleanField,
} from "react-admin";

// ------------------------------------------------

export default function ShowUser(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="email" />
<TextField source="name" />
<NumberField source="age" />
<NumberField source="balance" />
<BooleanField source="active" />
<TextField source="permissions" />
<TextField source="gender" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}