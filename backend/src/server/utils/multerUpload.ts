import multer from 'multer';

type MulterCallback = (error: Error | null, destination: string) => void;
type FileName = { originalname: string };

const storage: multer.StorageEngine = multer.diskStorage({
    destination: (_: any,__: any, cb: MulterCallback) => cb(null, '../images'),
    filename: (_: any, file: Express.Multer.File, cb: MulterCallback) => {
        const { originalname }: FileName = file;

        const auxArray: string[] = originalname.split('.');
        const extension: string = auxArray[1];
        const oldFileName: string = auxArray[0];

        const fileName = `${oldFileName}-${Date.now()}.${extension}`;
        cb(null, fileName);
    }
});

const upload: multer.Multer = multer({ storage });

export default upload;