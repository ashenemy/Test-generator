import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderModuleBase } from "./base/order.module.base";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { OrderGrpcController } from "./order.grpc.controller";

@Module({
  imports: [OrderModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderController, OrderGrpcController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
