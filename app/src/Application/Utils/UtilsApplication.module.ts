import { Module } from "@nestjs/common";
import { CounterModule } from '../../Domain/Counter/Counter.module';
import { HelperService } from './Services/Helper.service';
import { CounterInfrastructureModule } from '../../Infrastructure/Counter/CounterInfrastructure.module';


@Module({
    imports: [CounterModule, CounterInfrastructureModule],
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
        },
    ],
})
export class UtilsApplicationModule {}