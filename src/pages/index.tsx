import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineAddCircle } from 'react-icons/md';
import { z } from 'zod';
import { useSample } from '~/api/hooks';

const todoFormSchema = z.object({
  title: z.string().min(1),
});
type TodoFormValues = z.infer<typeof todoFormSchema>;

export default function IndexPage(): React.ReactElement {
  const form = useForm<TodoFormValues>({
    defaultValues: {
      title: '',
    },
    resolver: zodResolver(todoFormSchema),
  });
  const [todoList, setTodoList] = React.useState<TodoFormValues[]>([
    {
      title: 'Item 1',
    },
    {
      title: 'Item 2',
    },
    {
      title: 'Item 3',
    },
  ]);

  const handleSubmit = form.handleSubmit((values) => {
    setTodoList((prev) => [...prev, values]);
    form.reset();
  });

  const sample = useSample();

  return (
    <Box sx={{ m: 5 }}>
      <Typography level="h1">Hello, world!</Typography>

      <Box sx={{ my: 2 }}>
        <Typography level="h3">Todo example</Typography>
        <form onSubmit={handleSubmit}>
          <Stack sx={{ maxWidth: '300px' }} spacing={2}>
            <FormControl error={!!form.formState.errors.title}>
              <Input {...form.register('title')} />
              <FormHelperText>
                {form.formState.errors.title?.message}
              </FormHelperText>
            </FormControl>
            <Button type="submit" startDecorator={<MdOutlineAddCircle />}>
              Add
            </Button>
          </Stack>
        </form>
        <List variant="outlined" sx={{ my: 5 }}>
          {todoList.map((todo, index) => (
            <ListItem key={index}>{todo.title}</ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography level="h3">API example</Typography>
        <pre>{JSON.stringify(sample.data, null, 2)}</pre>
      </Box>
    </Box>
  );
}
