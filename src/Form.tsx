import { TextInput, Checkbox, Button, Group, Box, Radio } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import Footer, {formProps} from '../emails/footer';
import { render } from '@react-email/render';
import './App.css';

export default function Form() {

  const [showFooter, setShowFooter] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<formProps>({name:"", position:"", phoneNumber:"",email:""});
  const [wrsMember, setWrsMember] = useState(false);
  const [wrsName, setWrsName] = useState("");

  const form = useForm({
    initialValues: {
      name:'',
      position:'',
      email: '',
      phoneNumber:'',
    },

    validate: {
        //można zmienić, żeby regex sprawdzał całe .samorzad.p.lodz.pl. Inne errory też pewnie będą do zmiany(Przede wszystkim wymagania długości)
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Nieprawidłowy mail'),
      name: (value) => value.length > 4 ? null : 'Masz tak krótkie imię i nazwisko?',
      position: (value) => value.length > 4 ? null : 'Nie ma stanowiska o tak krótkiej nazwie',
      phoneNumber: (value) => value.length ===9 ? null : "Coś jest nie tak z twoim numerem telefonu" 

    },
  });

  return (
    <div>
    <Box className='formContainer' sx={{ 
        // Trzeba jakoś dać forularz na środek, pewnie są lepsze opcje na to. 
        //Teraz zakomentowane, żeby dobrze było widać stopkę
        marginTop:200,
        maxWidth: 300,
        minHeight:390,
        marginBottom:50,
        padding:10,
        borderRadius:5,
         }} mx="auto">
      <form onSubmit={form.onSubmit((values) => {
        //zmienna showFooter i setter do niej jest potrzebny do pokazania rezultatu. Potem do wywalenia
        setShowFooter(true);
        const footerValues:formProps = {
            name: values.name,
            position: values.position,
            phoneNumber: values.phoneNumber,
            email: values.email
        }
        console.log(footerValues);
        setInputValues(footerValues); 
        //Tu jest html potrzebny do wygenerowania stopki. Na razie jest tylko wyświetlany w konsoli. W przyszłości trzeba go jakoś przesłąć do gmaila
        const html = render(<Footer name={inputValues.name} position={inputValues.position} phoneNumber={inputValues.phoneNumber} email={inputValues.email}> </Footer>);
        console.log(html);
    })}>
        {/* Przed Inputami jakiś tytuł trzeba dać i może wyjaśnienie co robi aplikacja */}
        <TextInput
          withAsterisk
          label="Imię i nazwisko"
          placeholder="Imię i nazwisko"
          {...form.getInputProps('name')}
          radius={6}
          sx={{
            marginTop:15,
            marginBottom:10,
          }}
        />

        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
          radius={6}
          sx={{
            marginBottom:10,
          }}
        />

        <TextInput
          withAsterisk
          label="Numer Telefonu"
          placeholder="Numer Telefonu"
          {...form.getInputProps('phoneNumber')}
          radius={6}
          sx={{
            marginBottom:10,
          }}
        />

        <TextInput
          withAsterisk
          label="Stanowisko"
          placeholder="Stanowisko"
          {...form.getInputProps('position')}
          radius={6}
          sx={{
            marginBottom:10,
          }}
        />  
        <Checkbox label="Jestem członkiem WRS-u" checked={wrsMember} onChange={(event) => {
            setWrsMember(event.currentTarget.checked);
            setWrsName("");
            }} 
            sx={{
              marginBottom:10,
            }}
            />
        {wrsMember && <Radio.Group
            value={wrsName}
            onChange={setWrsName}
            name="WrsChoice"
            label="Wybierz swój WRS"
            description="Możesz wybrać tylko jeden"
            >       
            <Radio value="WEEIA" label="WEEIA" />
            <Radio value="WTIMS" label="WTIMS" />
            <Radio value="OiZ" label="OiZ" />
            </Radio.Group>}

        <Group position="right" mt="md">
          <Button sx={{backgroundColor: "#673ab7"}} type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
    {showFooter && <Footer name={inputValues.name} position={inputValues.position} phoneNumber={inputValues.phoneNumber} email={inputValues.email}></Footer>}
    </div>
  );
}
  