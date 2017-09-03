<?php

/*
 * This file is part of the Certificationy Applicant project.
 *
 * (c) Michael COULLERET <michael.coulleret@gmail.com>
 * (c) Mickaël Andrieu <andrieu.travail@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Certificationy\Loaders\YamlLoader;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Zend\Expressive\Router\FastRouteRouter;
use Zend\Expressive\Router\RouterInterface;

return [
    RouterInterface::class => \DI\get(FastRouteRouter::class),
    Psr\Log\LoggerInterface::class => DI\factory(function () {
        $logger = new Logger('applicant');

        $fileHandler = new StreamHandler('var/', Logger::DEBUG);
        $fileHandler->setFormatter(new \Monolog\Formatter\LineFormatter());
        $logger->pushHandler($fileHandler);

        return $logger;
    }),
    YamlLoader::class => DI\object()
        ->constructorParameter('paths', ["../vendor/certificationy/php-pack/data"]),
];
