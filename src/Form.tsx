import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import Footer, {formProps} from '../emails/footer';
import { render } from '@react-email/render';


export default function Demo() {

  const [showFooter, setShowFooter] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<formProps>({name:"", position:"", phoneNumber:"",email:""});

  const form = useForm({
    initialValues: {
      name:'',
      position:'sss',
      email: '',
      phoneNumber:'',
    },

    validate: {
        //można zmienić, żeby regex sprawdzał całe .samoradz.p.lodz.pl
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>
    <Box sx={{ maxWidth: 300, marginBottom:50 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => {
        setShowFooter(true);
        const footerValues:formProps = {
            name: values.name,
            position: values.position,
            phoneNumber: values.phoneNumber,
            email: values.email
        }
        console.log(footerValues);
        setInputValues(footerValues); 
        const html = render(<Footer name={inputValues.name} position={inputValues.position} phoneNumber={inputValues.phoneNumber} email={inputValues.email}> </Footer>);
        console.log(html);
    })}>
        <TextInput
          withAsterisk
          label="Imię i nazwisko"
          placeholder="Imię i nazwisko"
          {...form.getInputProps('name')}
        />

        <TextInput
          withAsterisk
          label="Email"
          placeholder="jakiś@email.com"
          {...form.getInputProps('email')}
        />

        <TextInput
          withAsterisk
          label="Numer Telefonu"
          placeholder="Numer Telefonu"
          {...form.getInputProps('phoneNumber')}
        />

        <TextInput
          withAsterisk
          label="Stanowisko"
          placeholder="stanowisko"
          {...form.getInputProps('position')}
        />  



        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
    {showFooter && <Footer name={inputValues.name} position={inputValues.position} phoneNumber={inputValues.phoneNumber} email={inputValues.email}></Footer>}
    </>
  );
}
  