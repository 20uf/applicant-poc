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

use Applicant\Action\GetSurveyAction;
use Applicant\Action\PostSurveyAction;
use Applicant\Action\GetQuestionsAction;
use Zend\Expressive\Application;
use Applicant\Action\FrontAction;
use Applicant\Action\GetCategoriesAction;

/**
 * @param Application $application
 */
$routes = function (Application $application) {
    $application->get('/', FrontAction::class);
    $application->get('/api/v1/categories', GetCategoriesAction::class);
    $application->get('/api/v1/survey/{token}', GetSurveyAction::class);
    $application->post('/api/v1/survey', PostSurveyAction::class);
    $application->get('/api/v1/questions', GetQuestionsAction::class);
};
