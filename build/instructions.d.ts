/// <reference types="@adonisjs/application/build/adonis-typings" />
import * as sinkStatic from '@adonisjs/sink';
import { ApplicationContract } from '@ioc:Adonis/Core/Application';
export default function instructions(projectRoot: string, _app: ApplicationContract, sink: typeof sinkStatic): Promise<void>;
