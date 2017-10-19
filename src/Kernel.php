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

namespace Applicant;

use Applicant\Loader\CertificationyLoader;
use DI\ContainerBuilder;
use Middlewares\Whoops;
use Psr\Container\ContainerInterface;
use Zend\Expressive\Application;
use Zend\Expressive\Router\RouterInterface;

/**
 * The Kernel is the heart of the Applicant system.
 */
final class Kernel
{
    /**
     * @var ContainerInterface
     */
    private $container;

    /**
     * @var bool
     */
    private $booted;

    /**
     * @var Application
     */
    private $application;

    /**
     * Run the application.
     */
    public function run()
    {
        $this->boot();

        $this->application->pipeRoutingMiddleware();
        $this->application->pipeDispatchMiddleware();

        $this->application->run();
    }

    /**
     * Boots the current kernel.
     */
    public function boot()
    {
        if (true === $this->booted) {
            return;
        }

        $this->initializeContainer();

        $this->application = new Application(
            $this->container->get(RouterInterface::class),
            $this->container
        );

        $this->application->pipe(Whoops::class);

        $routes = null;
        require '../config/Routes.php';

        if (is_callable($routes)) {
            $routes($this->application);
        }

        $this->booted = true;
    }

    /**
     * Get container.
     *
     * @return ContainerInterface
     */
    public function getContainer(): ContainerInterface
    {
        return $this->container;
    }

    /**
     * @return Application
     */
    public function getApplication(): Application
    {
        return $this->application;
    }

    /**
     * Initialize container.
     */
    private function initializeContainer()
    {
        $containerBuilder = new ContainerBuilder();
        $containerBuilder->addDefinitions('../config/container.php');

        $this->container = $containerBuilder->build();
    }
}
