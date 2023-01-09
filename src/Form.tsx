import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Radio,
  Center,
  Container,
  Stack,
  Card,
  Flex,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { render } from "@react-email/render";
import Footer from "./Footer";

export default function Form() {
  const { getInputProps, onSubmit, values, setFieldValue, isDirty } = useForm({
    initialValues: {
      name: "",
      position: "",
      email: "",
      phoneNumber: "",
      isWRSMember: false,
      WRS: "",
    },

    validate: {
      //można zmienić, żeby regex sprawdzał całe .samorzad.p.lodz.pl. Inne errory też pewnie będą do zmiany(Przede wszystkim wymagania długości)
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Nieprawidłowy mail"),
      name: (value) =>
        value.length > 4 ? null : "Masz tak krótkie imię i nazwisko?",
      position: (value) =>
        value.length > 4 ? null : "Nie ma stanowiska o tak krótkiej nazwie",
      phoneNumber: (value) =>
        value.length === 9 ? null : "Coś jest nie tak z twoim numerem telefonu",
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

              <TextInput
                withAsterisk
                label="Numer Telefonu"
                placeholder="Numer Telefonu"
                {...getInputProps("phoneNumber")}
                radius={6}
              />

              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...getInputProps("email")}
                radius={6}
              />

              <Checkbox
                label="Jestem członkiem WRS-u"
                {...getInputProps("isWRSMember")}
              />

              <Radio.Group
                {...getInputProps("WRS")}
                name="WrsChoice"
                label="Wybierz swój WRS"
                description="Możesz wybrać tylko jeden"
              >
                <Radio
                  value="WEEIA"
                  label="WEEIA"
                  disabled={!values.isWRSMember}
                />
                <Radio
                  value="WTIMS"
                  label="WTIMS"
                  disabled={!values.isWRSMember}
                />
                <Radio value="OiZ" label="OiZ" disabled={!values.isWRSMember} />
              </Radio.Group>

              <Group position="right">
                <Button type="submit">Submit</Button>
              </Group>
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
