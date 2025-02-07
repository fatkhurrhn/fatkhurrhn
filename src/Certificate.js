import { Dialog, DialogTrigger, DialogContent } from "components/ui/dialog";

export default function Certificate() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat Sertifikat</button>
        </DialogTrigger>
        <DialogContent>
          <img src="URL_GAMBAR_SERTIFIKAT" alt="Sertifikat" className="w-full h-auto" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
