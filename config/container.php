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
use Applicant\Helper\AssetHelper;

return [
    RouterInterface::class => \DI\get(FastRouteRouter::class),
    Psr\Log\LoggerInterface::class => DI\factory(function () {
        $logger = new Logger('applicant');

        $fileHandler = new StreamHandler('var/', Logger::DEBUG);
        $fileHandler->setFormatter(new \Monolog\Formatter\LineFormatter());
        $logger->pushHandler($fileHandler);

        return $logger;
    }),
    AssetHelper::class => DI\object()
        ->constructor(
            '../public/build/manifest.json',
            '/build/'
        ),
    YamlLoader::class => DI\object()->constructorParameter('paths', ["../vendor/certificationy/php-pack/data"]),
    Applicant\Dbal\Connection::class => DI\object()->constructor([
            'url' => sprintf('sqlite:///%s/var/data/certificationy.sqlite', __DIR__.'/..')
        ]
    )
];
