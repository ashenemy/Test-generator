import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AddressModuleBase } from "./base/address.module.base";
import { AddressService } from "./address.service";
import { AddressController } from "./address.controller";
import { AddressGrpcController } from "./address.grpc.controller";

@Module({
  imports: [AddressModuleBase, forwardRef(() => AuthModule)],
  controllers: [AddressController, AddressGrpcController],
  providers: [AddressService],
  exports: [AddressService],
})
export class AddressModule {}
