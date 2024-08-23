import { Button } from '@/components/ui/button';
import { FaPlus } from 'react-icons/fa';
import Typography from '@/components/ui/typography';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import ImageUpload from '@/components/image-upload';

const CreateWorkspace = () => {
  const formSchema = z.object({
    name: z.string().min(2, { message: 'Workspace name should be at least 2 characters long' }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async ({ name }: z.infer<typeof formSchema>) => {
    console.log(name);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-2 p-2">
          <Button variant="secondary">
            <FaPlus />
          </Button>
          <Typography variant="p" text="Add Workspace" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="my-4">
            <Typography variant="h4" text="Create workspace" />
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography text="Name" variant="p" />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your company name" {...field} />
                  </FormControl>
                  <FormDescription>
                    <Typography variant="p" text="This is your workspace name" />
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <ImageUpload />

            <Button type="submit">
              <Typography variant="p" text="Submit" />
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkspace;
