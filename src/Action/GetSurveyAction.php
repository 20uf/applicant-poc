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

namespace Applicant\Action;

use Applicant\Manager\SurveyManager;
use Interop\Http\ServerMiddleware\DelegateInterface;
use Interop\Http\ServerMiddleware\MiddlewareInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\JsonResponse;

/**
 * Survey action.
 */
class GetSurveyAction implements MiddlewareInterface
{
    /**
     * @var SurveyManager
     */
    private $surveyManager;

    public function __construct(SurveyManager $surveyManager)
    {
        $this->surveyManager = $surveyManager;
    }

    public function process(Request $request, DelegateInterface $delegate): JsonResponse
    {
        $survey = $this->surveyManager->getById(
            $request->getAttribute('id')
        );

        return new JsonResponse($survey);
    }
}
