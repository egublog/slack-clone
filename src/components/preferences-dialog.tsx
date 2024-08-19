import { useColorPreferences } from '@/providers/color-preferences';
import { useTheme } from 'next-themes';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Typography from './ui/typography';

const PreferencesDialog = () => {
  const { setTheme, theme } = useTheme();
  const { selectColor } = useColorPreferences();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Typography
          className="hover:text-white hover:bg-blue-700 px-2 py-1 rounded cursor-pointer"
          text="Preferences"
          variant="p"
        />
      </DialogTrigger>

      <DialogContent className="max-w-xs md:w-fit">
        <DialogTitle>
          <Typography text="Preferences" variant="h3" className="py-5" />
          <hr className="bg-gray-200" />
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default PreferencesDialog;
