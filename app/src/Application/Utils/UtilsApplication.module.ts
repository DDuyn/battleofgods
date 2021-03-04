import { Module } from "@nestjs/common";
import { HelperService } from './Services/Helper.service';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
@Module({
    imports: [CounterApplicationModule],
    providers: [
        {
            provide: 'IHelperService',
            useClass: HelperService
        }
    ],
    exports: [
        {
            provide: 'IHelperService',
            useClass: HelperService
        }
    ],
})
export class UtilsApplicationModule {}