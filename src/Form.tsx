import {
  TextInput,
  Center,
  Container,
  Stack,
  Card,
  Flex,
  Title,
  Input
} from "@mantine/core";
import InputMask from 'react-input-mask';
import { useForm } from "@mantine/form";
import { render } from "@react-email/render";
import Footer from "./Footer";

export default function Form() {
  const { getInputProps, onSubmit, values, setFieldValue, isDirty } = useForm({
    validateInputOnChange: true,
    initialValues: {
      name: "",
      position: "",
      email: "",
      phoneNumber: "",
      WRS: "",
    },

    validate: {
      //można zmienić, żeby regex sprawdzał całe .samorzad.p.lodz.pl. Inne errory też pewnie będą do zmiany(Przede wszystkim wymagania długości)
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Nieprawidłowy mail"),
      name: (value) =>
        value.length > 4 ? null : "Masz tak krótkie imię i nazwisko?",
      phoneNumber: (value) =>
        value.search("_")  ? null : "Zły numer telefonu",
    },
  });

  return (
    <Center sx={{ height: "100vh", flexDirection: "column" }} display="flex">
      <Title mb="lg">SSPŁ Generator Stopki</Title>
      <Flex align="center">
        <Card p="lg" sx={(t) => ({ borderRadius: t.spacing.md })} mx="auto">
          <form
            onSubmit={onSubmit((values) => {
              const html = render(<Footer {...values} />);
            })}
          >
            <Stack spacing="md">
              <TextInput
                withAsterisk
                label="Imię i nazwisko"
                placeholder="Imię i nazwisko"
                {...getInputProps("name")}
                onChange={(e) => {
                  getInputProps("name").onChange(e);

                  const [firstName, lastName] = e.target.value
                    .toLowerCase()
                    .split(" ");
                  setFieldValue(
                    "email",
                    `${firstName[0]}.${lastName || ""}@samorzad.p.lodz.pl`
                  );
                }}
                width="100%"
                radius={6}
              />

              <TextInput
                withAsterisk
                label="Stanowisko"
                placeholder="Stanowisko"
                {...getInputProps("position")}
                radius={6}
              />
              <Input.Wrapper
              label="Numer Telefonu"
              withAsterisk
              error={getInputProps("phoneNumber").value.search("_") === -1 ? null : "Zły numer telefonu"}
              >
                <Input
                  component={InputMask}
                  mask="+48 999 999 999"
                  placeholder="Your phone"
                  {...getInputProps("phoneNumber")}
                  radius={6}
                />
              </Input.Wrapper>

              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...getInputProps("email")}
                radius={6}
              />

            </Stack>
          </form>
        </Card>
        <Container>
          <Footer {...values} />
        </Container>
      </Flex>
    </Center>
  );
}
