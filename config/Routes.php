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

use Zend\Expressive\Application;
use Applicant\Action\FrontAction;
use Applicant\Action\CategoriesAction;

/**
 *
 * @param Application $application
 */
$routes = function (Application $application) {
    $application->get('/', FrontAction::class);
    $application->get('/api/categories', CategoriesAction::class);
};
