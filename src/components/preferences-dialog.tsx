import { useColorPreferences } from '@/providers/color-preferences';
import { useTheme } from 'next-themes';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Typography from './ui/typography';
import { HiOutlinePaintBrush } from 'react-icons/hi2';
import { MdLightMode } from 'react-icons/md';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

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
        <Tabs orientation="horizontal" defaultValue="themes">
          <TabsList>
            <TabsTrigger value="themes">
              <HiOutlinePaintBrush className="mr-2" />
              <Typography text="Themes" variant="p" />
            </TabsTrigger>
          </TabsList>
          <TabsContent className="max-w-xs md:max-w-fit" value="themes">
            <Typography text="Color Mode" variant="p" className="py-2 font-bold" />
            <Typography
              text="Choose if slack-clone appearance should be light or dark, or follow the computer settings"
              variant="p"
              className="pb-4"
            />
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() => setTheme('light')}
                className={`w-full ${cn(theme === 'light' && 'border-blue-600')}`}
              >
                <MdLightMode className="mr-2" size={20} />
                <Typography text="Light" variant="p" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default PreferencesDialog;
